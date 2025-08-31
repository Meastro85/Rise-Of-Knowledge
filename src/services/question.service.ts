import axios from "axios";
import type { Question } from "../lib/Question";

export async function getExamQuestions() {
  const questions = await axios.get<Question[]>("./data/final_exam.json");
  return questions.data;
}
