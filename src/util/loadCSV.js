import Papa from "papaparse";

export const loadCSV = async (filePath) => {
  const response = await fetch(filePath); // Fetch the CSV file
  if (!response.ok) {
    throw new Error(`Failed to fetch the file at ${filePath}: ${response.statusText}`);
  }
  const csv = await response.text(); // Read the response as text
  const data = Papa.parse(csv, { header: true }); // Parse the CSV using PapaParse
  return data.data; // Return the parsed data
};
