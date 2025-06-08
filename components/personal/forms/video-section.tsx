"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Link, Eye, Save, Video } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface VideoSectionProps {
  data: any
  onUpdate: (data: any) => void
  title: string
}

export function VideoSection({ data, onUpdate, title }: VideoSectionProps) {
  const handleSave = () => {
    // Implementar lógica de salvamento
    console.log(`Salvando ${title}:`, data)
    alert(`${title} salvo com sucesso!`)
  }

  const handlePreview = () => {
    // Implementar lógica de visualização
    console.log(`Visualizando ${title}:`, data)
    alert(`Abrindo preview do ${title}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Switch
          id={`${title}-enabled`}
          checked={data.enabled || false}
          onCheckedChange={(checked) => onUpdate({ enabled: checked })}
        />
        <Label htmlFor={`${title}-enabled`}>Ativar {title}</Label>
      </div>

      {data.enabled && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`${title}-title`}>Título do Vídeo</Label>
              <Input
                id={`${title}-title`}
                placeholder="Digite o título do vídeo"
                value={data.title || ""}
                onChange={(e) => onUpdate({ title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`${title}-external-link`}>Link Externo</Label>
              <Input
                id={`${title}-external-link`}
                placeholder="https://exemplo.com"
                value={data.externalLink || ""}
                onChange={(e) => onUpdate({ externalLink: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${title}-cta`}>Call to Action (CTA)</Label>
            <Select value={data.cta || "saiba-mais"} onValueChange={(value) => onUpdate({ cta: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma opção" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="saiba-mais">Saiba Mais</SelectItem>
                <SelectItem value="clique-aqui">Clique Aqui</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${title}-description`}>Descrição do Vídeo</Label>
            <Textarea
              id={`${title}-description`}
              placeholder="Descreva o conteúdo do vídeo"
              value={data.description || ""}
              onChange={(e) => onUpdate({ description: e.target.value })}
              rows={3}
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Tipo de Mídia</Label>
              <RadioGroup
                value={data.mediaType || "link"}
                onValueChange={(value) => onUpdate({ mediaType: value })}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="link" id={`${title}-media-link`} />
                  <Label htmlFor={`${title}-media-link`} className="flex items-center gap-1">
                    <Link className="h-4 w-4" /> Link Externo
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="upload" id={`${title}-media-upload`} />
                  <Label htmlFor={`${title}-media-upload`} className="flex items-center gap-1">
                    <Upload className="h-4 w-4" /> Upload de Arquivo
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {data.mediaType === "link" ? (
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <Label>Link do Vídeo</Label>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Cole o link do vídeo aqui"
                        value={data.videoLink || ""}
                        onChange={(e) => onUpdate({ videoLink: e.target.value })}
                      />
                      <Button variant="outline" size="icon">
                        <Link className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <Label>Upload do Vídeo</Label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-4 text-center">
                      <Video className="h-6 w-6 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground mb-2">Arraste o vídeo ou clique para selecionar</p>
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Selecionar Arquivo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePreview}>
              <Eye className="h-4 w-4 mr-2" />
              Visualizar Vídeo
            </Button>
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Salvar
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
