import "./styles.css";
import react, { useState } from "react";

export default function App() {
  const [genre, setGenre] = useState("adventure");

  // book data
  const bookData = {
    adventure: [
      {
        name: "Don Quixote",
        rating: "4.5/5",
        description:
          "The Ingenious Gentleman Don Quixote of La Mancha, or just Don Quixote, is a Spanish novel by Miguel de Cervantes."
      },
      {
        name: "The Three Musketeers",
        rating: "4/5",
        description:
          "The Three Musketeers is a French historical adventure novel written in 1844 by French author Alexandre Dumas."
      },
      {
        name: "Twenty Thousand Leagues Under the Sea ",
        rating: "4/5",
        description:
          "Twenty Thousand Leagues Under the Seas: A World Tour Underwater is a classic science fiction adventure novel by French writer Jules Verne"
      }
    ],
    mystery: [
      {
        name: "THE Silent Patient",
        rating: "4.8/5",
        description:
          "The Silent Patient is a 2019 psychological thriller novel written by British–Cypriot author Alex Michaelides."
      },
      {
        name: "Gone Girl",
        rating: "4.4/5",
        description:
          "Gone Girl is a 2012 crime thriller novel by American writer Gillian Flynn. It was published by Crown Publishing Group in June 2012"
      },
      {
        name: "The Maltese Falcon",
        rating: "4.3/5",
        description:
          "The Maltese Falcon is a 1930 detective novel by American writer Dashiell Hammett, originally serialized in the magazine Black Mask beginning with the September 1929 issue."
      }
    ],
    horror: [
      {
        name: "Frankenstein",
        rating: "5/5",
        description:
          "Frankenstein is an 1818 novel written by English author Mary Shelley. Frankenstein tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment. "
      },
      {
        name: "The Woman in Black by Susan Hill ",
        rating: "4.4/5",
        description:
          "The Woman in Black is a 1983 gothic horror novel written by Susan Hill. The plot concerns a mysterious spectre that haunts a small English town. "
      },
      {
        name: "Dracula ",
        rating: "4.2/5",
        description:
          "Dracula is a novel by Bram Stoker, published in 1897. As an epistolary novel, the narrative is related through letters, diary entries, and newspaper articles."
      }
    ]
  };

  function btnClickHandler(e) {
    if (e.target.tagName === "BUTTON") {
      setGenre(e.target.innerHTML.toLowerCase());
    }
  }

  return (
    <div className="App">
      <div>
        <h1>Popular Books</h1>
        <p>Check out popular books, click on the genere to know.</p>
        <div className="genre-buttons" onClick={btnClickHandler}>
          <button>Adventure</button>
          <button>Mystery</button>
          <button>Horror</button>
        </div>
        <div className="output">
          <ul>
            {bookData[genre].map((book) => {
              return (
                <li key={book.name}>
                  <div style={{ fontWeight: "bold" }}>{book.name}</div>
                  <div>{book.rating}</div>
                  <div>{book.description}</div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
