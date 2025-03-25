async function getNumberWithCodeCity(country, number) {
    const url = `https://jsonmock.hackerrank.com/api/countries?name=${country}`;
  
    try {
      const response = await fetch(url);
      const result = await response.json();
      const data = result.data;
    
      if (!data || data.length === 0) {
        return -1
      }

      const callingCodes = data[0].callingCodes

      const code = callingCodes.reduce((acc, curr) => {
        return Number(acc) > Number(curr) ? acc : curr;
      });

    return `+${code} ${number}`;
    
    } catch (error) {
      return '-1';
    }
  }
  
  // Exemplo de uso
  getNumberWithCodeCity('Afghanistan', '21971787414').then(numberFormated => console.log(numberFormated));