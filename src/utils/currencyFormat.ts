export const currencyFormat = (value: string) => {
       let inputValue = value.replace(/\D/g, "");
        inputValue = inputValue.replace(/^0+(?=\d)/, "");
        
        let formattedValue;
        if (inputValue.length === 0) {
          formattedValue = "0,00";
        } else if (inputValue.length === 1) {
          formattedValue = `0,0${inputValue}`;
        } else if (inputValue.length === 2) {
          formattedValue = `0,${inputValue}`;
        } else {
          const integerPart = inputValue.slice(0, -2);
          const decimalPart = inputValue.slice(-2);
          formattedValue = `${integerPart},${decimalPart}`;
        }

  return formattedValue
};