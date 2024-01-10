import { useEffect } from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Aditya Verma",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic: "https://i.stack.imgur.com/34AD2.jpg",
    replies: [
      {
        name: "Mannu",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        profilePic: "https://i.stack.imgur.com/34AD2.jpg",

        replies: [
          {
            name: "Rma",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            profilePic: "https://i.stack.imgur.com/34AD2.jpg",
            replies: [],
          },
        ],
      },
      {
        name: "Singha",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        profilePic: "https://i.stack.imgur.com/34AD2.jpg",
        replies: [],
      },
    ],
  },
  {
    name: "Aman Sharma",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic: "https://i.stack.imgur.com/34AD2.jpg",
    replies: [],
  },
  {
    name: "Rahul",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic: "https://i.stack.imgur.com/34AD2.jpg",
    replies: [],
  },
  {
    name: "Vivek",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic: "https://i.stack.imgur.com/34AD2.jpg",
    replies: [],
  },
  {
    name: "Vineet",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic: "https://i.stack.imgur.com/34AD2.jpg",
    replies: [],
  },
  {
    name: "Riya",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic: "https://i.stack.imgur.com/34AD2.jpg",
    replies: [],
  },
  {
    name: "Prem",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    profilePic: "https://i.stack.imgur.com/34AD2.jpg",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold my-5">Comments:</h1>
      {commentsData.map((comment) => {
        return <Comment key={comment.name} data={comment} />;
      })}
    </div>
  );
};

export default CommentsContainer;
