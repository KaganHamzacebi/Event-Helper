export function timezoneToLabel(timezone) {
    switch (timezone) {
        case "pt":
            return "Pacific Time - Los Angeles";
        case "mt":
            return "Mountain Time - Denver";
        case "ct":
            return "Central Time - Chicago";
        case "et":
            return "Eastern Time - New York";
        case "at":
            return "Atlantic Time - Halifax";
        case "bt":
            return "Brazil Time - São Paulo";
        case "utc":
            return "Coordinated Universal Time (UTC)";
        case "wet":
            return "Western Europe - London";
        case "cet":
            return "Central Europe - Berlin";
        case "eet":
            return "Eastern Europe - Bucharest";
        case "trt":
            return "Turkey - Ankara";
        case "ist":
            return "India - Kolkata";
        case "bst":
            return "Bangladesh - Dhaka";
        case "hkt":
            return "Asia - Hong Kong";
        case "kst":
            return "Korea - Seoul";
        case "jst":
            return "Japan - Tokyo";
        case "west":
            return "Western Australia - Perth";
        case "north":
            return "Northern Australia - Darwin";
        case "east":
            return "Eastern Australia - Queensland";
        case "south":
            return "Southern Australia - Adelaide";
        case "aedt":
            return "Eastern Australia - Sydney";
        case "nza":
            return "New Zealand - Auckland";
    }
}