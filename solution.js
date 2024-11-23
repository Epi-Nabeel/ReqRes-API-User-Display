const apiKey = "6764a7278c81103298970b7f178b5128141291b9627760dc86a31a5850844487";
const baseUrl = "https://min-api.cryptocompare.com/data/v2/pair/mapping/exchange?e=Bitso&api_key=" + apiKey;

window.onload = async function () {
  try {
    const response = await axios.get(baseUrl);
    const symbols = response.data.Data.current;
    const fsymSelect = document.getElementById("fsym");
    const tsymSelect = document.getElementById("tsym");

    symbols.forEach((symbol) => {
      const option1 = document.createElement("option");
      option1.value = symbol.fsym;
      option1.textContent = symbol.fsym;
      fsymSelect.appendChild(option1);

      const option2 = document.createElement("option");
      option2.value = symbol.tsym;
      option2.textContent = symbol.tsym;
      tsymSelect.appendChild(option2);
    });
  } catch (error) {
    console.error("Error fetching symbols:", error);
  }
};

async function convertSymbol() {
  const fsym = document.getElementById("fsym").value;
  const tsym = document.getElementById("tsym").value;
  const conversionUrl = `https://min-api.cryptocompare.com/data/price?fsym=${fsym}&tsyms=${tsym}&api_key=${apiKey}`;

  try {
    const response = await axios.get(conversionUrl);
    const result = response.data[tsym];
    document.getElementById("answer").value = "1 " + fsym + " is equal to " + result + " " + tsym;    
  } catch (error) {
    console.error("Error:", error);
  }
}