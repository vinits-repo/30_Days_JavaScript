async function handlingURL() {
    try {
      let response = await fetch(
        "https://Invalidurl.example.com"
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      let data = await response.text();
      console.log(data);
    } catch (error) {
      console.error(`Error Detected: ${error.message}`);
    }
  }
  
  handlingURL();
  