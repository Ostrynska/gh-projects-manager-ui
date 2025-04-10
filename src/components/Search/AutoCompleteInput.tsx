import Select from "react-select";
import { useEffect, useState } from "react";

interface AutoCompleteInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

interface OptionType {
  label: string;
  value: string;
}

const AutoCompleteInput = ({ value, onChange, placeholder, className }: AutoCompleteInputProps) => {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const fetchSuggestions = async () => {
        if (inputValue.length > 2) {
          const response = await fetch(`https://api.github.com/search/repositories?q=${inputValue}&per_page=5`);
          const data = await response.json();
          interface Repository {
            full_name: string;
          }

          const repos = data.items?.map((repo: Repository) => ({
            label: `${repo.full_name}`,
            value: `${repo.full_name}`,
          })) || [];
          setOptions(repos);
        }
      };
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [inputValue]);

  return (
    <Select
      className={className}
      options={options}
      onInputChange={setInputValue}
      onChange={(option) => onChange(option?.value || "")}
      placeholder={placeholder}
      value={value ? { label: value, value } : null}
      isClearable
      styles={{
        container: (base) => ({ ...base, flex: 1 }),
        control: (base) => ({ ...base, border: "none", boxShadow: "none", minHeight: "36px" }),
        input: (base) => ({ ...base, margin: 0 }),
      }}
    />
  );
};

export default AutoCompleteInput;
