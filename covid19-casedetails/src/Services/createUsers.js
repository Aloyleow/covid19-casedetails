export const createUsers = async (user) => {
    const url = "https://api.airtable.com/v0/app7NmtJ4XeCH21hm/Table%201";
    // console.log("formData", caseData);
    const payload = { fields: { ...user } };
    // console.log("payload", payload);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer pat3pwH3GM4RAOLSh.a660c14f13712fd4f0d74fce6a2049cfc53719fe6bd83ff3e04199cf945c86c5",
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