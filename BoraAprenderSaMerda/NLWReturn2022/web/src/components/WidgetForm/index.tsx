import { useState } from "react";
import { CloseButton } from "../CloseButton";

import bugImageURL from "../../assets/bug.svg"
import ideaImageURL from "../../assets/idea.svg"
import thoughtImageURL from "../../assets/thought.svg"
import { FeedBackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedBackContentStep } from "./Steps/FeedBackContentStep";
import { FeedBackSucessStep } from "./Steps/FeedBackSucessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageURL,
      alt: "Imagem de um inseto"
    }
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageURL,
      alt: "Imagem de uma lâmpada"
    }
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageURL,
      alt: "Imagem de um balão de pensamento"
    }
  },
}

export type FeedbackType = keyof typeof feedbackTypes

//Object.entries(feedbackTypes) => [ ['BUG', {...}], ['IDEA', {...}], ['THOUGHT', {...}] ]

export function WidgetForm() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const[feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }


  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl  mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

     { feedbackSent ? (
       <FeedBackSucessStep onFeedbackRestartRequested={handleRestartFeedback}/>
     ) : (
        <>
          {!feedbackType ? (
            <FeedBackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
          ) : (
            <FeedBackContentStep 
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
     )
    
     }

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a> 
      </footer>
    </div>
  )
}