export const logOut = (e, setUser, setbasket, setWatchList) => {
    e.preventDefault();
    setUser(null);
    setbasket([]);
    setWatchList([]);

    document.cookie =
    "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};