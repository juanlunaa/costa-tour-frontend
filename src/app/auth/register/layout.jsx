import { RegisterFormProvider } from "@/context/register"

export default function RegisterLayout({ children }) {
  return <RegisterFormProvider>{children}</RegisterFormProvider>
}
