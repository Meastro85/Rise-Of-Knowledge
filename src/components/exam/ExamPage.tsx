import {
  Card,
  Center,
  Container,
  Loader,
  Paper,
  ScrollArea,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { Suspense, useState } from "react";
import { useExamQuestions } from "../../hooks/useExamQuestions.hook";
import { ErrorBoundary } from "../common/ErrorBoundary";
import { Page } from "../common/page/Page";

export default function ExamPage() {
  const { questions } = useExamQuestions();
  const [filter, setFilter] = useState("");

  const filteredQuestions = questions.filter((q) =>
    q.question.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <Page pageTitle="Final Exam Questions">
      <ErrorBoundary fallback={<div>⚠️ Something went wrong!</div>}>
        <Suspense
          fallback={
            <Container>
              <Loader size="lg"></Loader>
            </Container>
          }
        >
          <Container size={700}>
            <Center>
              <Title order={2} mb="md">
                Final Exam Questions
              </Title>
            </Center>
            <Container size={500} mb="md">
              <TextInput
                value={filter}
                onChange={(event) => setFilter(event.currentTarget.value)}
                placeholder="Search question"
              />
            </Container>
            <Paper withBorder radius="lg">
              <ScrollArea h={600} p="sm">
                {filteredQuestions.map((q) => (
                  <Card key={q.id} shadow="sm" radius="md" withBorder mb="sm">
                    <Text fw={500} size="lg" mb="xs">
                      {q.question || "Untitled question"}
                    </Text>
                    <Text size="sm" c="dimmed">
                      {q.answer || "No answer yet"}
                    </Text>
                  </Card>
                ))}
              </ScrollArea>
            </Paper>
          </Container>
        </Suspense>
      </ErrorBoundary>
    </Page>
  );
}
