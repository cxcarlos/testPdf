const fetchData = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content: 'This is an sample PDF printed with pdfMake' }),
    };
    fetch("http://pdfgenerator.estratega.ec/pdf", requestOptions)
      .then((res) => console.log(res.json()))
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
 };

fetchData();
