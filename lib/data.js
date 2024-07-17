export async function fetchHouses() {
    const url = "/db/data/fetch-houses.php";
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let data = await response.json();
      data = data.data;

      return data;
    } catch (error) {
      console.error("Fetch error:", error);
      throw error;
    }
}

export async function fetchOwners() {
  const url = "/db/data/fetch-owners.php";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    data = data.data;

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function fetchTenants() {
  const url = "/db/data/fetch-tenants.php";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    data = data.data;

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function fetchMembers() {
  const url = "/db/data/fetch-members.php";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    data = data.data;

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}

export async function fetchBookings() {
  const url = "/db/data/fetch-bookings.php";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    data = data.data;

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}