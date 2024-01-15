import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

interface IFormInputProps {
  label: string;
  id: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  value: string;
  error: string | undefined;
  submitCount: number;
}

export default function FormInput(props: IFormInputProps) {
  return (
    <FormControl isInvalid={Boolean(props.error) && props.submitCount > 0}>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      {props.label !== "Deskripsi" ? (
        <Input
          id={props.id}
          borderColor={"gray.300"}
          onChange={props.onChange}
          value={props.value}
          type={props.label === "Jumlah" ? "text" : "text"}
        />
      ) : (
        <Textarea id={props.id} onChange={props.onChange} value={props.value} />
      )}
      {Boolean(props.error) && props.submitCount > 0 ? (
        <FormErrorMessage>{props.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
}
