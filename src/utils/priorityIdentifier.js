export function getPriority(priority) {
  switch (priority) {
    case "HIGH":
      return "border-[#D20708]";
    case "MEDIUM":
      return "border-[#d28b08]";
    case "LOW":
      return "border-[#066d08]";
    default:
      return "border-[#000000]";
  }
}
