/* Constructs a type consisting of all properties of Type set to required. The
 opposite of Partial.

 RequiredUser obliga a que todas las propiedades sean proporcionadas.

 Ejemplo en Entorno de Trabajo:
 Al recibir datos de una API externa donde algunos campos opcionales deben ser
tratados como requeridos en tu aplicación.
 */

type Client = {
  name: string;
  isOnline: boolean;
  typeOfService: "premium" | "basic" | "pro";
};

type RequiredClient = Required<Client>;

function createClient(client: RequiredClient): Client {
  return client;
}

const basicClient = createClient({
  name: "Jasmine",
  isOnline: true,
  typeOfService: "basic",
});

// const badClient = createClient({ name: "Julius", isOnline: false }); // Falla porque todas las propiedades de Client son obligatorias
