export const logOut = (e, setUser, setBasket, setWatchList) => {
    e.preventDefault();
    setUser(null);
    setBasket([]);
    setWatchList([]);

    console.log("Logged out")

    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; patch=/;";
};