export async function createTenant(input) {
    const url = `/db/actions/create-tenant.php`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(input),
      });
  
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    //   alert(data.message);
    //   if(data.success) {
    //     fetchProducts();
    //   }
  
    }catch(error) {
      console.error("Fetch error:", error);
    }
}