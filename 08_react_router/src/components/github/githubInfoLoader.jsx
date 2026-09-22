export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/Mohitrawat-18");

  return response.json();
};
