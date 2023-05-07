export interface UseCase<IN, OUT> {
  execute(args: IN): Promise<OUT>;
}
