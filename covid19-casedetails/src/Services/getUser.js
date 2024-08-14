export async function getUser() {
    const url = "https://api.airtable.com/v0/app7NmtJ4XeCH21hm/Table%201?maxRecords=20&view=Grid%20view";
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer pat3pwH3GM4RAOLSh.a660c14f13712fd4f0d74fce6a2049cfc53719fe6bd83ff3e04199cf945c86c5",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json.records.map((record) => {
        return {
          id: record.id,
          ...record.fields,
        }});

    } catch (error) {
      console.error(error.message);
    }
  }