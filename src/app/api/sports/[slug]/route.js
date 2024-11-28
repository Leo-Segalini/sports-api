import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export async function GET(request, context) {
  const { params } = context; // Contexte contient les params dynamiques
  const slug = await params.slug; // Utilisez await ici

  if (!slug) {
    return new Response(JSON.stringify({ error: "Slug requis" }), { status: 400 });
  }

  const { data, error } = await supabase
    .from('sports')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error("Erreur Supabase:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 404 });
  }

  return new Response(JSON.stringify(data), { status: 200 });
}
