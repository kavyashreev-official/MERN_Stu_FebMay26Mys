// Role-Based Route Resolver Using switch + Function
const getRoute = function(role, isLoggedIn) {
    if (!isLoggedIn) {
        return "/login";
    } else {
        switch (role) {
            case "admin":
                return "/admin";

            case "student":
                return "/student";

            case "college":
                return "/college";

            case "proctor":
                return "/proctor";

            default:
                return "/denied";
        }
    }
};
console.log(getRoute("admin", false));