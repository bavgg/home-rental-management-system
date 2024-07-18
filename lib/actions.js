export async function registerTenant(input) {
    const url = `/db/actions/register-tenant.php`;

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
export async function registerOwner(input) {
  const url = `/db/actions/register-owner.php`;

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

  }catch(error) {
    console.error("Fetch error:", error);
  }
}

export async function signOut() {
  const url = "/lib/signout.php";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Fetch error:", error);
  }
}

export async function signinTenant(input) {
  const url = `/db/actions/signin-tenant.php`;

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

  }catch(error) {
    console.error("Fetch error:", error);
  }
}

export async function signinOwner(input) {
  const url = `/db/actions/signin-owner.php`;

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

  }catch(error) {
    console.error("Fetch error:", error);
  }
}