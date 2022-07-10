type TLang = "ru" | "en" | "kg"
export const dynamicLocalization = (
  ru: string,
  en?: string,
  kg?: string
): string => {
  const lang: TLang =
    typeof window !== "undefined"
      ? (localStorage.getItem("i18nextLng") as TLang)
      : "ru"
  switch (lang) {
    case "ru":
      return ru
    case "en":
      return en || ru
    case "kg":
      return kg || ru
  }
}
