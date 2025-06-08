import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logotipo-01-SjSQOcGNRBVU1q7p8ZMuMFhKWgMb1y.png"
        alt="Fitgrid Logo"
        width={150}
        height={50}
        className="object-contain"
      />
    </div>
  )
}
