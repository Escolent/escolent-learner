export interface LlmProvider {
  complete(
    task: "draft_skill_name" | "draft_lesson" | "draft_problem" | "explain_skill",
    input: string,
  ): Promise<string>;
}
