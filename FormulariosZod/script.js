const { z } = window.Zod;

const registerSchema = z.object({
  name: z
    .string()
    .min(3, { message: "El nombre debe tener al menos 3 letras" })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, {
      message: "El nombre solo puede contener letras",
    }),

  email: z
    .string()
    .email({ message: "El correo electrónico que se ingresó no es válido" }),

  password: z
    .string()
    .min(8, { message: "La contraseña debe tener al menos 8 caracteres" })
    .regex(/[A-Z]/, { message: "La contraseña debe tener al menos una letra mayúscula" })
    .regex(/[0-9]/, { message: "La contraseña debe tener al menos un número" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "La contraseña debe tener al menos un carácter especial",
    }),
});

document.getElementById("registerForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    password: document.getElementById("password").value,
  };

  try {
    registerSchema.parse(formData);
    alert("¡Registro exitoso!");
  } catch (error) {
    if (error.errors) {
      const messages = error.errors.map(e => `• ${e.message}`).join("\n");
      alert("Errores de validación:\n" + messages);
    }
  }
});
