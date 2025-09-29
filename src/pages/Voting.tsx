import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { doc, getDoc, setDoc, arrayUnion, increment } from "firebase/firestore";
import image1 from "../assets/vote/1.jpg";
import image2 from "../assets/vote/2.jpg";
import image3 from "../assets/vote/3.jpg";



const images = [
  { id: "1", url: image1 },
  { id: "2", url: image2 },
  { id: "3", url: image3 }
];


export default function Voting() {
  const [userVotes, setUserVotes] = useState([]);
  const [votesCount, setVotesCount] = useState({});

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
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      {images.map(img => (
        <div key={img.id} style={{ margin: "20px" }}>
          <img src={img.url} alt="" style={{ maxWidth: "300px", width: "100%" }} />
          <button onClick={() => handleVote(img.id)} disabled={userVotes.includes(img.id)}>
            {userVotes.includes(img.id) ? "Voted" : "Vote"} ({votesCount[img.id] || 0})
          </button>
        </div>
      ))}
    </div>
  );
}
