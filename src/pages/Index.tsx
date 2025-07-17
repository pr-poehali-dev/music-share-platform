import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLogin, setIsLogin] = useState(true);

  const musicTracks = [
    { id: 1, title: "Електронна симфонія", artist: "DJ Космос", plays: "2.3K", duration: "3:45", image: "/placeholder.svg" },
    { id: 2, title: "Нічні мрії", artist: "Синтезатор", plays: "1.8K", duration: "4:12", image: "/placeholder.svg" },
    { id: 3, title: "Цифрова революція", artist: "Техно Бунт", plays: "5.1K", duration: "2:58", image: "/placeholder.svg" },
  ];

  const photos = [
    { id: 1, title: "Студійна сесія", user: "Музикант", likes: 145, image: "/placeholder.svg" },
    { id: 2, title: "Концерт під зорями", user: "Фотограф", likes: 289, image: "/placeholder.svg" },
    { id: 3, title: "Вінілові спогади", user: "Колекціонер", likes: 92, image: "/placeholder.svg" },
  ];

  const videos = [
    { id: 1, title: "Живе виконання", user: "Рок Гурт", views: "12K", duration: "5:32", image: "/placeholder.svg" },
    { id: 2, title: "Створення біту", user: "Продюсер", views: "8.7K", duration: "3:21", image: "/placeholder.svg" },
    { id: 3, title: "Джемсейшн", user: "Джаз Тріо", views: "3.4K", duration: "7:48", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Music" className="text-blue-500" size={32} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
                SoundShare
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#music" className="hover:text-blue-400 transition-colors">Музика</a>
              <a href="#photos" className="hover:text-blue-400 transition-colors">Фото</a>
              <a href="#videos" className="hover:text-blue-400 transition-colors">Відео</a>
              <a href="#community" className="hover:text-blue-400 transition-colors">Спільнота</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-white hover:text-blue-400">
                <Icon name="Search" size={20} />
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Увійти</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent animate-fade-in">
              Поділіться своїм звуком
            </h2>
            <p className="text-xl mb-8 text-gray-300 animate-fade-in">
              Платформа для музикантів, фотографів та відеографів. Завантажуйте, діліться та відкривайте нові таланти.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
                <Icon name="Upload" className="mr-2" size={20} />
                Завантажити контент
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 text-lg">
                <Icon name="Play" className="mr-2" size={20} />
                Дослідити
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Section */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-md">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">
                {isLogin ? 'Увійти в акаунт' : 'Створити акаунт'}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {isLogin ? 'Поверніться до своїх треків' : 'Приєднуйтесь до спільноти'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Ім'я</Label>
                  <Input id="name" className="bg-gray-700 border-gray-600 text-white" placeholder="Ваше ім'я" />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input id="email" type="email" className="bg-gray-700 border-gray-600 text-white" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white">Пароль</Label>
                <Input id="password" type="password" className="bg-gray-700 border-gray-600 text-white" placeholder="Ваш пароль" />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                {isLogin ? 'Увійти' : 'Зареєструватися'}
              </Button>
              <p className="text-center text-gray-400">
                {isLogin ? 'Немає акаунта? ' : 'Вже маєте акаунт? '}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  {isLogin ? 'Зареєструватися' : 'Увійти'}
                </button>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">🎵 Популярна музика</h3>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
              Показати всі
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {musicTracks.map((track) => (
              <Card key={track.id} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon name="Music" className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{track.title}</h4>
                      <p className="text-gray-400 text-sm">{track.artist}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="secondary" className="bg-blue-600 text-white">
                          <Icon name="Play" size={12} className="mr-1" />
                          {track.plays}
                        </Badge>
                        <span className="text-gray-400 text-sm">{track.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <section id="photos" className="py-16 px-4 bg-gray-900/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">📸 Фотогалерея</h3>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
              Показати всі
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <Card key={photo.id} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Image" className="text-white" size={48} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{photo.title}</h4>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-sm">{photo.user}</p>
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" className="text-red-500" size={16} />
                      <span className="text-gray-400 text-sm">{photo.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">🎬 Відео</h3>
            <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
              Показати всі
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card key={video.id} className="bg-gray-800 border-gray-700 hover:bg-gray-700 transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg mb-4 flex items-center justify-center relative">
                    <Icon name="Video" className="text-white" size={48} />
                    <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <h4 className="text-white font-semibold mb-2">{video.title}</h4>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-sm">{video.user}</p>
                    <div className="flex items-center space-x-1">
                      <Icon name="Eye" className="text-blue-500" size={16} />
                      <span className="text-gray-400 text-sm">{video.views}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">🌟 Приєднуйтесь до спільноти</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Тисячі музикантів, фотографів та відеографів вже діляться своїм мистецтвом. Станьте частиною творчої спільноти!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-white" size={32} />
              </div>
              <h4 className="text-white font-semibold mb-2">Спільнота</h4>
              <p className="text-gray-400">Знайдіть однодумців та колаборантів</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" className="text-white" size={32} />
              </div>
              <h4 className="text-white font-semibold mb-2">Популярність</h4>
              <p className="text-gray-400">Отримайте визнання за свої роботи</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Trophy" className="text-white" size={32} />
              </div>
              <h4 className="text-white font-semibold mb-2">Досягнення</h4>
              <p className="text-gray-400">Розвивайтесь разом з платформою</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Music" className="text-blue-500" size={24} />
                <span className="text-white font-bold">SoundShare</span>
              </div>
              <p className="text-gray-400 text-sm">
                Платформа для творчих людей, які хочуть ділитися своїм мистецтвом з світом.
              </p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Контент</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Музика</a></li>
                <li><a href="#" className="hover:text-white">Фото</a></li>
                <li><a href="#" className="hover:text-white">Відео</a></li>
                <li><a href="#" className="hover:text-white">Плейлисти</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Спільнота</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Форум</a></li>
                <li><a href="#" className="hover:text-white">Блог</a></li>
                <li><a href="#" className="hover:text-white">Події</a></li>
                <li><a href="#" className="hover:text-white">Підтримка</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Контакти</h5>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Youtube" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 SoundShare. Всі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;