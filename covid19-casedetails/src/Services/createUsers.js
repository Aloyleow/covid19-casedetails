export const createUsers = async (user) => {
   const key = import.meta.env.VITE_API_KEY_createUser
    const url = "https://api.airtable.com/v0/app7NmtJ4XeCH21hm/Table%201";
    const payload = { fields: { ...user } };
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization:
          `Bearer ${key}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
    //   const json = await response.json();
    //   return { id: json.id, ...json.fields };
    } catch (error) {
      console.error(error.message);
    }
  };