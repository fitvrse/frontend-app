import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      
        <Image
          src="https://rayzercompany.com/wp-content/uploads/2025/05/Logotipo-01.png"
          alt="Fitverse Logo"
          width={134}
          height={112}
          className="object-cover"
        />
      </div>
      
    
  )
}
