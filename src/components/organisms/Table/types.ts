interface OptionsProps {
  label: string;
  callback(): void;
}

interface ConfigProps {
  options: OptionsProps[];
}

export type ShelfProps<T> = {
  props: T;
  config?: ConfigProps;
};
