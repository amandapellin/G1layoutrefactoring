import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Badge } from "./ui/badge";
import { Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner@2.0.3";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const categories = [
    { id: "politica", label: "Política", color: "bg-blue-100 text-blue-700" },
    { id: "economia", label: "Economia", color: "bg-green-100 text-green-700" },
    { id: "tecnologia", label: "Tecnologia", color: "bg-purple-100 text-purple-700" },
    { id: "cultura", label: "Cultura", color: "bg-pink-100 text-pink-700" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Por favor, insira seu email");
      return;
    }

    if (selectedCategories.length === 0) {
      toast.error("Selecione pelo menos uma categoria");
      return;
    }

    setIsSubmitted(true);
    toast.success("Inscrição realizada com sucesso!", {
      description: "Você receberá as principais notícias no seu email.",
    });
  };

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  if (isSubmitted) {
    return (
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <div>
              <h3 className="text-green-900 mb-2">Inscrição confirmada!</h3>
              <p className="text-sm text-green-700">
                Você está inscrito para receber notícias de: {selectedCategories.join(", ")}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsSubmitted(false)}
              className="border-green-300"
            >
              Alterar preferências
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Mail className="w-5 h-5 text-red-600" />
          <Badge variant="destructive">Novidade</Badge>
        </div>
        <CardTitle className="text-red-900">Newsletter G1</CardTitle>
        <CardDescription className="text-red-700">
          Receba as principais notícias direto no seu email
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="space-y-2">
            <Label htmlFor="email">Seu email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white"
            />
          </div>

          {/* Categories Selection */}
          <div className="space-y-3">
            <Label>Categorias de interesse</Label>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={category.id}
                    checked={selectedCategories.includes(category.id)}
                    onCheckedChange={() => toggleCategory(category.id)}
                  />
                  <Label
                    htmlFor={category.id}
                    className="cursor-pointer flex items-center gap-2"
                  >
                    <span className={`px-2 py-0.5 rounded text-xs ${category.color}`}>
                      {category.label}
                    </span>
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy Notice */}
          <p className="text-xs text-neutral-600">
            Ao se inscrever, você concorda em receber emails do G1. 
            Você pode cancelar a qualquer momento.
          </p>

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
            Inscrever-se gratuitamente
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
