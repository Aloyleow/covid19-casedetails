export const createData = async (caseData) => {
    const url = "https://api.airtable.com/v0/appl07cKSlVT5aGI4/Table%201";
    console.log("formData", caseData);
    const payload = { fields: { ...caseData } };
    console.log("payload", payload);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer pat2UuA0NYZBqUWxm.563541c4ccdb50f1705cae0506558cd625ff60f690a37fafadcdd1a317800b24",
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