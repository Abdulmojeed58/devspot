import MainLayout from "@/layouts/main-layout";

export default function Home() {
  return (
    <MainLayout>
      <div className="p-6 space-y-4">
        <h1 className="text-dev-text text-2xl font-bold">DevSpot - Main Page</h1>
        
        {/* Test custom colors */}
        <div className="bg-dev-card p-4 rounded-lg border border-dev-border">
          <p className="text-dev-text">This card uses custom dev-card background</p>
          <p className="text-dev-text-muted">This text uses dev-text-muted color</p>
        </div>
        
        <div className="bg-dev-card-hover p-4 rounded-lg">
          <p className="text-dev-text">This uses dev-card-hover background</p>
        </div>
        
        <div className="flex space-x-2">
          <button className="bg-dev-primary text-white px-4 py-2 rounded">Primary</button>
          <button className="bg-dev-success text-white px-4 py-2 rounded">Success</button>
          <button className="bg-dev-warning text-white px-4 py-2 rounded">Warning</button>
          <button className="bg-dev-danger text-white px-4 py-2 rounded">Danger</button>
        </div>
        
        {/* Test animations */}
        <div className="animate-pulse bg-dev-primary h-4 rounded"></div>
        <div className="animate-bounce bg-dev-success h-4 w-4 rounded-full"></div>
      </div>
    </MainLayout>
  );
}
