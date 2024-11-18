import FormCreateKeyPartner from "@/components/ui/forms/CreateKeyPartnerAccount"

export default function RegisterKeyPartner() {
  return (
    <div
      className="relative pt-28 flex justify-center"
      style={{
        backgroundImage: 'url("/auth-image.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <FormCreateKeyPartner />
    </div>
  )
}
