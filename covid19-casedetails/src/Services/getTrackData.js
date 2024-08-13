export async function getTrackData() {
    const url = "https://api.airtable.com/v0/appl07cKSlVT5aGI4/Table%201?maxRecords=77&view=Grid%20view";
    try {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer pat2UuA0NYZBqUWxm.563541c4ccdb50f1705cae0506558cd625ff60f690a37fafadcdd1a317800b24",
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
        };
      });
    } catch (error) {
      console.error(error.message);
    }
  }