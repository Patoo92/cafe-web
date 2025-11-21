proyecto/
├── entities/
│   ├── Category.json
│   ├── Product.json
│   └── Order.json
├── pages/
│   ├── Home.js
│   ├── Shop.js
│   ├── ProductDetail.js
│   ├── Cart.js
│   ├── Checkout.js
│   ├── OrderConfirmation.js
│   ├── LaStoria.js
│   ├── LaProduzione.js
│   ├── Ambiente.js
│   ├── Investimenti.js
│   ├── Merchandising.js
│   ├── Stand.js
│   ├── PrivateLabel.js
│   └── Contatti.js
├── components/
│   ├── shop/
│   │   ├── ProductCard.jsx
│   │   └── CategoryCard.jsx
│   └── home/
│       ├── HeroSection.jsx
│       └── FeaturedProductsCarousel.jsx
└── Layout.js





 Stack tecnológico:

React - Framework frontend
Tailwind CSS - Estilos
shadcn/ui - Componentes UI (Button, Input, Card, etc.)
Lucide React - Iconos
React Query (@tanstack/react-query) - Gestión de datos/cache
React Router DOM - Navegación
date-fns - Manejo de fechas
Base44 SDK - Backend (base de datos, autenticación)
Sonner - Notificaciones toast







import React from 'react';

export default function Documentation() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">📚 Documentación del Proyecto Karoma E-commerce</h1>

      {/* Estructura de Carpetas */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-red-600">📁 Estructura de Carpetas</h2>
        <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm">
          <pre>{`proyecto/
├── entities/              # Esquemas de base de datos (JSON Schema)
│   ├── Category.json      # Entidad de categorías de productos
│   ├── Product.json       # Entidad de productos
│   └── Order.json         # Entidad de órdenes/pedidos
│
├── pages/                 # Páginas principales (React components)
│   ├── Home.js           # Página de inicio con hero, productos destacados
│   ├── Shop.js           # Catálogo de productos con filtros
│   ├── ProductDetail.js  # Detalle de producto individual
│   ├── Cart.js           # Página del carrito de compras
│   ├── Checkout.js       # Formulario de checkout/pago
│   ├── OrderConfirmation.js  # Confirmación después de comprar
│   ├── LaStoria.js       # Página "La Storia" (historia empresa)
│   ├── LaProduzione.js   # Página "La Produzione" (producción)
│   ├── Ambiente.js       # Página compromiso ambiental
│   ├── Investimenti.js   # Página de inversiones
│   ├── Merchandising.js  # Página de merchandising
│   ├── Stand.js          # Página de stands físicos
│   ├── PrivateLabel.js   # Página servicio private label
│   └── Contatti.js       # Página de contacto
│
├── components/            # Componentes reutilizables
│   ├── shop/             # Componentes específicos de la tienda
│   │   ├── ProductCard.jsx      # Tarjeta de producto (grid/lista)
│   │   └── CategoryCard.jsx     # Tarjeta de categoría
│   ├── home/             # Componentes específicos del home
│   │   ├── HeroSection.jsx      # Sección hero principal
│   │   └── FeaturedProductsCarousel.jsx  # Carrusel productos destacados
│   └── Documentation.jsx  # Este componente (documentación)
│
└── Layout.js             # Layout global (header, footer, navegación)`}</pre>
        </div>
      </section>

      {/* Stack Tecnológico */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-red-600">🛠️ Stack Tecnológico</h2>
        
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Frontend Framework</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>React</strong> - Librería principal para UI</li>
              <li><strong>React Router DOM</strong> - Navegación entre páginas</li>
              <li><strong>@tanstack/react-query</strong> - Gestión de estado y cache de datos</li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Estilos y UI</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Tailwind CSS</strong> - Framework de utilidades CSS</li>
              <li><strong>shadcn/ui</strong> - Componentes UI (Button, Input, Card, Select, etc.)</li>
              <li><strong>Lucide React</strong> - Iconos SVG</li>
              <li><strong>Sonner</strong> - Notificaciones toast</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Backend (Base44)</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Base44 SDK (@/api/base44Client)</strong> - Cliente pre-inicializado</li>
              <li><strong>Entities API</strong> - CRUD de productos, categorías, órdenes</li>
              <li><strong>Authentication</strong> - Sistema de autenticación integrado</li>
              <li><strong>File Storage</strong> - Almacenamiento de imágenes</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Utilidades</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>date-fns</strong> - Manejo de fechas</li>
              <li><strong>lodash</strong> - Funciones de utilidad</li>
              <li><strong>createPageUrl()</strong> - Helper para crear URLs de páginas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Entidades */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-red-600">🗄️ Entidades (Base de Datos)</h2>
        
        <div className="space-y-6">
          <div className="border-l-4 border-red-600 pl-6">
            <h3 className="text-xl font-bold mb-2">Category (entities/Category.json)</h3>
            <p className="text-gray-700 mb-2">Categorías de productos</p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-mono text-sm">Campos: name, slug, description, image_url, parent_category, order</p>
            </div>
          </div>

          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-bold mb-2">Product (entities/Product.json)</h3>
            <p className="text-gray-700 mb-2">Productos del catálogo</p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-mono text-sm">Campos: name, slug, description, price, category_id, image_url, images[], stock, featured, variants[]</p>
            </div>
          </div>

          <div className="border-l-4 border-green-600 pl-6">
            <h3 className="text-xl font-bold mb-2">Order (entities/Order.json)</h3>
            <p className="text-gray-700 mb-2">Órdenes de compra</p>
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-mono text-sm">Campos: order_number, customer_name, customer_email, customer_phone, shipping_address, items[], total, status, payment_status, notes</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-bold mb-2">📌 Campos automáticos en todas las entidades:</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li><strong>id</strong> - Identificador único</li>
            <li><strong>created_date</strong> - Fecha de creación</li>
            <li><strong>updated_date</strong> - Fecha de última actualización</li>
            <li><strong>created_by</strong> - Email del usuario que lo creó</li>
          </ul>
        </div>
      </section>

      {/* Páginas */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-red-600">📄 Páginas (pages/)</h2>
        
        <div className="space-y-4">
          <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold text-lg">Home.js</h3>
            <p className="text-gray-600">Página principal con hero section, productos destacados, categorías y sección ambiental</p>
            <p className="text-sm text-gray-500 mt-2">Ruta: /Home</p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold text-lg">Shop.js</h3>
            <p className="text-gray-600">Catálogo completo con filtros por categoría y ordenamiento</p>
            <p className="text-sm text-gray-500 mt-2">Ruta: /Shop | Parámetros: ?category=ID</p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold text-lg">ProductDetail.js</h3>
            <p className="text-gray-600">Detalle de producto con variantes, selector de cantidad y botón agregar al carrito</p>
            <p className="text-sm text-gray-500 mt-2">Ruta: /ProductDetail?id=PRODUCT_ID</p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold text-lg">Cart.js</h3>
            <p className="text-gray-600">Carrito con modificación de cantidades y resumen de compra</p>
            <p className="text-sm text-gray-500 mt-2">Ruta: /Cart</p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold text-lg">Checkout.js</h3>
            <p className="text-gray-600">Formulario de checkout con datos de cliente y dirección de envío</p>
            <p className="text-sm text-gray-500 mt-2">Ruta: /Checkout</p>
          </div>

          <div className="bg-white border-2 border-gray-200 p-4 rounded-lg">
            <h3 className="font-bold text-lg">OrderConfirmation.js</h3>
            <p className="text-gray-600">Confirmación de pedido exitoso</p>
            <p className="text-sm text-gray-500 mt-2">Ruta: /OrderConfirmation?order=ORDER_NUMBER</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="font-bold mb-2">Páginas institucionales:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>LaStoria.js - Historia de la empresa</li>
              <li>LaProduzione.js - Proceso de producción</li>
              <li>Ambiente.js - Compromiso ambiental</li>
              <li>Investimenti.js - Inversiones y crecimiento</li>
              <li>Merchandising.js - Productos de merchandising</li>
              <li>Stand.js - Ubicación de stands físicos</li>
              <li>PrivateLabel.js - Servicio de private label</li>
              <li>Contatti.js - Formulario de contacto</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Componentes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-red-600">🧩 Componentes (components/)</h2>
        
        <div className="space-y-4">
          <div className="bg-white border-2 border-blue-200 p-4 rounded-lg">
            <h3 className="font-bold text-lg">shop/ProductCard.jsx</h3>
            <p className="text-gray-600">Tarjeta de producto para mostrar en grids/listas</p>
            <p className="text-sm text-gray-500 mt-2">Props: product (objeto con id, name, price, image_url, etc.)</p>
          </div>

          <div className="bg-white border-2 border-blue-200 p-4 rounded-lg">
            <h3 className="font-bold text-lg">shop/CategoryCard.jsx</h3>
            <p className="text-gray-600">Tarjeta de categoría para navegación</p>
            <p className="text-sm text-gray-500 mt-2">Props: category (objeto con id, name, image_url)</p>
          </div>

          <div className="bg-white border-2 border-purple-200 p-4 rounded-lg">
            <h3 className="font-bold text-lg">home/HeroSection.jsx</h3>
            <p className="text-gray-600">Sección hero principal de la página de inicio</p>
            <p className="text-sm text-gray-500 mt-2">Props: ninguno (componente standalone)</p>
          </div>

          <div className="bg-white border-2 border-purple-200 p-4 rounded-lg">
            <h3 className="font-bold text-lg">home/FeaturedProductsCarousel.jsx</h3>
            <p className="text-gray-600">Carrusel de productos destacados con navegación</p>
            <p className="text-sm text-gray-500 mt-2">Props: products (array de productos)</p>
          </div>
        </div>
      </section>

      {/* Layout */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-red-600">🎨 Layout (Layout.js)</h2>
        
        <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
          <h3 className="font-bold text-lg mb-3">Componente Layout Global</h3>
          <p className="text-gray-700 mb-4">
            El Layout envuelve automáticamente todas las páginas y proporciona:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Header fijo</strong> - Con logo, menú de navegación, redes sociales e icono de carrito</li>
            <li><strong>Menú responsive</strong> - Menú hamburguesa para móvil, dropdowns para desktop</li>
            <li><strong>Contador del carrito</strong> - Se actualiza automáticamente en tiempo real</li>
            <li><strong>Footer</strong> - Con links, información de contacto y copyright</li>
          </ul>
          
          <div className="bg-yellow-50 p-4 rounded mt-4">
            <p className="font-bold mb-2">⚠️ Importante:</p>
            <p className="text-sm">Las páginas NO deben importar o usar el Layout manualmente. Base44 lo aplica automáticamente.</p>
          </div>
        </div>
      </section>

      {/* Flujo de Usuario */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-red-600">🔄 Flujo de Usuario (E-commerce)</h2>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
              <div>
                <strong>Home</strong> - Usuario ve hero, productos destacados y categorías
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
              <div>
                <strong>Shop</strong> - Navega el catálogo, filtra por categoría, ordena productos
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
              <div>
                <strong>ProductDetail</strong> - Ve detalles, selecciona variante/cantidad, agrega al carrito
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
              <div>
                <strong>Cart</strong> - Revisa carrito, modifica cantidades, elimina productos
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>
              <div>
                <strong>Checkout</strong> - Completa formulario con datos personales y dirección
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">6</span>
              <div>
                <strong>OrderConfirmation</strong> - Recibe confirmación con número de orden
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* API Usage */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-red-600">🔌 Uso de Base44 API</h2>
        
        <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm space-y-4">
          <div>
            <p className="text-gray-600 mb-2">// Importar SDK</p>
            <pre className="bg-white p-3 rounded">import {'{ base44 }'} from '@/api/base44Client';</pre>
          </div>

          <div>
            <p className="text-gray-600 mb-2">// Listar productos</p>
            <pre className="bg-white p-3 rounded">const products = await base44.entities.Product.list('-created_date', 50);</pre>
          </div>

          <div>
            <p className="text-gray-600 mb-2">// Filtrar productos por categoría</p>
            <pre className="bg-white p-3 rounded">const products = await base44.entities.Product.filter({'{'} category_id: 'cat123' {'}'}, '-created_date', 20);</pre>
          </div>

          <div>
            <p className="text-gray-600 mb-2">// Crear producto</p>
            <pre className="bg-white p-3 rounded">{`const product = await base44.entities.Product.create({
  name: 'Caffè Espresso',
  price: 12.50,
  category_id: 'cat123'
});`}</pre>
          </div>

          <div>
            <p className="text-gray-600 mb-2">// Actualizar producto</p>
            <pre className="bg-white p-3 rounded">await base44.entities.Product.update(productId, {'{ price: 15.00 }'});</pre>
          </div>

          <div>
            <p className="text-gray-600 mb-2">// Eliminar producto</p>
            <pre className="bg-white p-3 rounded">await base44.entities.Product.delete(productId);</pre>
          </div>

          <div>
            <p className="text-gray-600 mb-2">// Crear orden</p>
            <pre className="bg-white p-3 rounded">{`const order = await base44.entities.Order.create({
  order_number: 'ORD-123',
  customer_name: 'Mario Rossi',
  customer_email: 'mario@example.com',
  items: [...],
  total: 50.00
});`}</pre>
          </div>
        </div>
      </section>

      {/* Sistema de Carrito */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-red-600">🛒 Sistema de Carrito</h2>
        
        <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
          <p className="mb-4">El carrito se gestiona con <strong>localStorage</strong> del navegador:</p>
          
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded">
              <p className="font-bold mb-2">Estructura del carrito:</p>
              <pre className="text-sm">{`[
  {
    id: "product_id",
    name: "Nombre del producto",
    price: 12.50,
    quantity: 2,
    image_url: "https://...",
    variant: "Variante seleccionada" // opcional
  }
]`}</pre>
            </div>

            <div className="bg-blue-50 p-4 rounded">
              <p className="font-bold mb-2">Actualización en tiempo real:</p>
              <p className="text-sm">Se usa un evento personalizado <code>cartUpdated</code> que se dispara cada vez que cambia el carrito, actualizando el contador en el header automáticamente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Características del diseño */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-red-600">🎨 Características de Diseño</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">✅ Responsive</h3>
            <p className="text-sm text-gray-700">Diseño adaptado para móvil, tablet y desktop</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">✅ Animaciones suaves</h3>
            <p className="text-sm text-gray-700">Transiciones CSS y hover effects</p>
          </div>

          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">✅ Imágenes de Unsplash</h3>
            <p className="text-sm text-gray-700">Imágenes de stock de alta calidad</p>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">✅ Color scheme Karoma</h3>
            <p className="text-sm text-gray-700">Rojo (#DC2626) como color principal</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">✅ Tipografía clara</h3>
            <p className="text-sm text-gray-700">Sistema de fuentes legible y profesional</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-bold mb-2">✅ Sombras y depth</h3>
            <p className="text-sm text-gray-700">Cards con sombras para crear profundidad</p>
          </div>
        </div>
      </section>

      {/* Próximos pasos */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-red-600">🚀 Próximos Pasos</h2>
        
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
          <ol className="space-y-3">
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</span>
              <div>
                <strong>Agregar datos de ejemplo</strong> - Crear categorías y productos para poblar el catálogo
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</span>
              <div>
                <strong>Subir imágenes reales</strong> - Reemplazar imágenes de Unsplash con fotos de productos reales
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</span>
              <div>
                <strong>Configurar pasarela de pago</strong> - Integrar Stripe/PayPal (requiere backend functions)
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</span>
              <div>
                <strong>Emails transaccionales</strong> - Configurar emails de confirmación de pedidos
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</span>
              <div>
                <strong>Panel de administración</strong> - Crear dashboard para gestionar productos y órdenes
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Notas importantes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-red-600">⚠️ Notas Importantes</h2>
        
        <div className="space-y-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
            <p className="font-bold">Páginas planas (no subcarpetas)</p>
            <p className="text-sm">Las páginas DEBEN estar en pages/ directamente, NO en subcarpetas como pages/admin/Dashboard.js</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <p className="font-bold">Componentes pueden tener subcarpetas</p>
            <p className="text-sm">Los componentes SÍ pueden organizarse en subcarpetas: components/shop/ProductCard.jsx es válido</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4">
            <p className="font-bold">No exportar código</p>
            <p className="text-sm">Base44 no permite exportar el proyecto completo. El código vive en la plataforma.</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <p className="font-bold">Backend incluido</p>
            <p className="text-sm">Base de datos, autenticación y file storage están incluidos automáticamente. No hay que configurar servidores.</p>
          </div>
        </div>
      </section>

    </div>
  );
}