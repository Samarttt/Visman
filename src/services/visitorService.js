export const registerVisitor = async (visitorData) => {
  const response = await fetch("http://localhost:5040/api/Visitor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(visitorData),
  });
  if (!response.ok) {
    throw new Error("Registration failed");
  } 
  return response;
};
