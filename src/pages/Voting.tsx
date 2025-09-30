import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { doc, getDoc, setDoc, arrayUnion, increment } from "firebase/firestore";
import image1 from "../assets/vote/1.jpg";
import image2 from "../assets/vote/2.jpg";
import image3 from "../assets/vote/3.jpg";



const images = [
  { id: "1", url: image1 },
  { id: "2", url: image2 },
  { id: "3", url: image3 },
  { id: "4", url: image1 },
  { id: "5", url: image2 },
  { id: "6", url: image3 },
  { id: "7", url: image1 },
  { id: "8", url: image2 },
  { id: "9", url: image3 },
  { id: "10", url: image1 },
  { id: "11", url: image2 },
  { id: "12", url: image3 }
];


export default function Voting() {
  const [userVotes, setUserVotes] = useState([]);
  const [votesCount, setVotesCount] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

  // Load user votes and vote counts
  useEffect(() => {
    const loadUserVotes = async () => {
      if (!auth.currentUser) return;

      const userDoc = doc(db, "votes", auth.currentUser.uid);
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) setUserVotes(docSnap.data().votedImages || []);
      else setUserVotes([]);
    };

    const loadVotesCount = async () => {
      const counts = {};
      for (const img of images) {
        const imgDoc = await getDoc(doc(db, "images", img.id));
        counts[img.id] = imgDoc.exists() ? imgDoc.data().votes : 0;
      }
      setVotesCount(counts);
    };

    loadUserVotes();
    loadVotesCount();
  }, []);

  const handleVote = async (imageId) => {
    if (userVotes.includes(imageId)) return; // already voted

    // Add image to user's votedImages
    const userDoc = doc(db, "votes", auth.currentUser.uid);
    await setDoc(userDoc, { votedImages: arrayUnion(imageId) }, { merge: true });

    // Increment total votes for the image
    const imgDoc = doc(db, "images", imageId);
    await setDoc(imgDoc, { votes: increment(1) }, { merge: true });

    // Update UI
    setUserVotes([...userVotes, imageId]);
    setVotesCount({ ...votesCount, [imageId]: (votesCount[imageId] || 0) + 1 });
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-foreground text-center">
          Vote for Your Favorite
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Tap the heart ♥ to vote for your favorite image. You can only vote once.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map(img => (
            <div key={img.id} className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="aspect-square overflow-hidden cursor-pointer" onClick={() => setSelectedImage(img)}>
                <img 
                  src={img.url} 
                  alt={`Photo ${img.id}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => handleVote(img.id)} 
                    disabled={userVotes.length > 0 && !userVotes.includes(img.id)}
                    className={`p-2 rounded-full transition-all hover:scale-110 ${
                      userVotes.includes(img.id) 
                        ? 'text-red-500 hover:text-red-600' 
                        : userVotes.length > 0 
                          ? 'text-muted-foreground cursor-not-allowed'
                          : 'text-muted-foreground hover:text-red-500'
                    }`}
                  >
                    <svg 
                      className="w-8 h-8" 
                      fill={userVotes.includes(img.id) ? "currentColor" : "none"}
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                      />
                    </svg>
                  </button>
                  <span className="text-lg font-medium text-foreground">
                    {votesCount[img.id] || 0}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  Photo {img.id}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {userVotes.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-lg font-semibold">
              Thank you for voting! Your vote has been recorded.
            </p>
          </div>
        )}
      </div>

      {/* Full-size image modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-all z-10"
            >
              ×
            </button>
            <img
              src={selectedImage.url}
              alt={`Photo ${selectedImage.id} - Full Size`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
              <p className="text-sm">Photo {selectedImage.id}</p>
              <p className="text-xs opacity-75">Click outside to close</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
