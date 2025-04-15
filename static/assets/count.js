function count() {
    fetch('/increment')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then(count => {
        console.log('Latest  count:', Number(count));
      })
      .catch(error => {
        console.error('Request  failed:', error);
      });
  }