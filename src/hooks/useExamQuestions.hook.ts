import { useSuspenseQuery } from "@tanstack/react-query";
import type { Question } from "../lib/Question";
import { getExamQuestions } from "../services/question.service";

export function useExamQuestions() {
  const { data: questions } = useSuspenseQuery<Question[]>({
    queryKey: ["examQuestions"],
    queryFn: () => getExamQuestions(),
  });
  return { questions };
}
