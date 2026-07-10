-- Schemat bazy danych dla PULSR-CLTH
-- Wykorzystujemy potęgę PostgreSQL (kolumny JSONB) do elastycznego przechowywania danych
-- takich jak zagnieżdżone ceny wielowalutowe, kolory i media,
-- co jest standardem w nowoczesnych aplikacjach e-commerce (np. Stripe, Shopify).

CREATE TABLE IF NOT EXISTS drops (
    id VARCHAR(50) PRIMARY KEY,
    slug VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    tagline VARCHAR(255),
    description TEXT,
    story TEXT,
    price JSONB NOT NULL, -- np. {"PLN": 299.00, "EUR": 69.00, "USD": 75.00}
    status VARCHAR(50) NOT NULL, -- preorder, coming, soldout
    preorder_deadline TIMESTAMP WITH TIME ZONE,
    estimated_ship_date DATE,
    category VARCHAR(100),
    sizes JSONB, -- tablica stringów: ["S", "M", "L", "XL"]
    colors JSONB, -- tablica obiektów: [{"name": "Black", "hex": "#000", "images": []}]
    media JSONB, -- obiekt: {"heroVideo": null, "gallery": []}
    size_guide JSONB, -- obiekt wymiarów dla różnych rozmiarów
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS shipping_methods (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price JSONB NOT NULL,
    estimated_days VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS shipping_settings (
    id INT PRIMARY KEY DEFAULT 1,
    free_shipping_threshold JSONB NOT NULL
);

-- Przykładowe dane z pliku shipping.json
INSERT INTO shipping_methods (id, name, description, price, estimated_days) VALUES
('inpost-paczkomat', 'InPost Paczkomat', 'Delivery to InPost parcel locker', '{"PLN": 12.99, "EUR": 3.00, "USD": 3.50}', '2-3'),
('inpost-courier', 'InPost Kurier', 'Courier delivery to your address', '{"PLN": 18.99, "EUR": 4.50, "USD": 5.00}', '1-2')
ON CONFLICT (id) DO NOTHING;

INSERT INTO shipping_settings (id, free_shipping_threshold) VALUES
(1, '{"PLN": 300, "EUR": 70, "USD": 75}')
ON CONFLICT (id) DO NOTHING;

-- Funkcja aktualizująca pole updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_drops_updated_at
    BEFORE UPDATE ON drops
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Seedowanie produktów z pliku drops.json
INSERT INTO drops (id, slug, name, tagline, description, story, price, status, category, sizes, colors, media, size_guide, featured) VALUES
('drop-001', 'jaguar-jersey', 'JAGUAR JERSEY', 'FOOTBALL DROP', 'Y2K sport aesthetic. Retro football jersey with a dark jaguar animal print. Boxy fit. Limited edition run.', 'Woven with raw energy.', '{"PLN": 280.00, "EUR": 65.00, "USD": 70.00}'::jsonb, 'soldout', 'jersey', '["S", "M", "L", "XL"]'::jsonb, '[{"name": "Jaguar", "hex": "#1c1c1c", "images": ["/media/drops/drop-001/gallery-1.png"]}]'::jsonb, '{"heroVideo": null, "heroPoster": "/media/hero.png", "gallery": ["/media/drops/drop-001/gallery-1.png"], "behindTheScenes": []}'::jsonb, '{"S": {"chest": "56cm", "length": "68cm", "sleeve": "42cm"}, "M": {"chest": "58cm", "length": "70cm", "sleeve": "43cm"}, "L": {"chest": "60cm", "length": "72cm", "sleeve": "44cm"}, "XL": {"chest": "62cm", "length": "74cm", "sleeve": "45cm"}}'::jsonb, true),
('drop-002', 'gr-blue-zip', 'GR BLUE ZIP', 'GR CAPSULE', 'Heavyweight royal blue zip-up hoodie. Dropped shoulders, cropped body. 500GSM.', 'GR CAPSULE 01.', '{"PLN": 450.00, "EUR": 105.00, "USD": 115.00}'::jsonb, 'soldout', 'hoodie', '["S", "M", "L"]'::jsonb, '[{"name": "Royal Blue", "hex": "#002366", "images": ["/media/drops/drop-002/gallery-1.png"]}]'::jsonb, '{"heroVideo": null, "heroPoster": "/media/drops/drop-002/gallery-1.png", "gallery": ["/media/drops/drop-002/gallery-1.png"], "behindTheScenes": []}'::jsonb, '{"S": {"chest": "58cm", "length": "65cm", "sleeve": "61cm"}, "M": {"chest": "60cm", "length": "67cm", "sleeve": "62cm"}, "L": {"chest": "62cm", "length": "69cm", "sleeve": "63cm"}}'::jsonb, false),
('drop-003', 'gr-doll-ls', 'GR DOLL', 'GR CAPSULE', 'White streetwear longsleeve t-shirt with a dark, abstract gothic graphic in the center.', 'GR CAPSULE 01.', '{"PLN": 290.00, "EUR": 65.00, "USD": 75.00}'::jsonb, 'soldout', 'longsleeve', '["M", "L", "XL"]'::jsonb, '[{"name": "White", "hex": "#ffffff", "images": ["/media/drops/drop-003/gallery-1.png"]}]'::jsonb, '{"heroVideo": null, "heroPoster": "/media/drops/drop-003/gallery-1.png", "gallery": ["/media/drops/drop-003/gallery-1.png"], "behindTheScenes": []}'::jsonb, '{"M": {"chest": "62cm", "length": "65cm", "sleeve": "64cm"}, "L": {"chest": "64cm", "length": "67cm", "sleeve": "65cm"}, "XL": {"chest": "66cm", "length": "69cm", "sleeve": "66cm"}}'::jsonb, false)
ON CONFLICT (id) DO UPDATE SET
    price = EXCLUDED.price,
    status = EXCLUDED.status,
    media = EXCLUDED.media,
    size_guide = EXCLUDED.size_guide;

