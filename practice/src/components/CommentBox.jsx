import React, { useOptimistic, useState, startTransition } from "react";

const CommentBox = () => {

  const [inputValue, setInputValue] = useState('');
  const [comments, setComments] = useState([]);

  const [optimisticComments, addOptimisticComment] = useOptimistic(
     comments,
     (currentComments, newComment) => {
        const filtered = currentComments.filter(c => c.id !== newComment.id); 
        return [...filtered, newComment]; 
    } 
);

  function fakeSendToServer(comment) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const ok = Math.random() > 0.5;
        ok ? resolve(comment) : reject("Server error");
      }, 1000);
    });
  }

async function handleSend() {
     if (!inputValue.trim()) return; 
     const newComment = { 
         id: crypto.randomUUID(),
         text: inputValue,
         status: "pending", 
        };  

    startTransition(() => {
         addOptimisticComment(newComment); 
        });
    setInputValue(""); 

    try { 
        await fakeSendToServer(newComment);
          setComments(prev => {
             const filtered = prev.filter(c => c.id !== newComment.id);
              return [...filtered, { ...newComment, status: "success" }];
            });

        } catch {
            const failedComment = {      
              ...newComment, 
              status: "failed", 
            }; 
            startTransition(() => {
                addOptimisticComment(failedComment); 
            });
            setComments(prev => {
              const filtered = prev.filter(c => c.id !== newComment.id);
              return [...filtered, failedComment]; 
            });
        }
    }

  return (
    <>
      <input
        className="w-52 h-16 m-4"
        value={inputValue}
        type="text"
        placeholder="Enter your comment"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <button
        className="border rounded-lg p-3 m-4 bg-cyan-400"
        onClick={handleSend}
      >
        Send
      </button>
      <br />
      <br />
      <ul className="m-4">
        {optimisticComments.map(c => (
          <li key={c.id}>
            {c.text} --- {c.status}
          </li>
        ))}
      </ul>
    </>
  );
};

export default CommentBox;
