import { ArrowRight, CheckCircle2, Target, TrendingUp, Users, Shield } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-neutral-50">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="text-2xl font-semibold text-neutral-900">Valpre</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#framework" className="text-neutral-600 hover:text-primary-600 transition-colors">Framework</a>
              <a href="#features" className="text-neutral-600 hover:text-primary-600 transition-colors">Features</a>
              <a href="#adoption" className="text-neutral-600 hover:text-primary-600 transition-colors">Adoption</a>
              <Button size="sm">Get Started</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
            Enterprise Strategic Framework
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
            Transform Your Enterprise with <span className="text-primary-600">Valpre</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
            A comprehensive strategic framework designed for enterprise-wide adoption, 
            combining proven methodologies with scalable implementation strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              Explore Framework <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Framework Overview */}
      <section id="framework" className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Two Powerful Frameworks</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Valpre offers integrated frameworks designed to drive strategic value across your organization
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Strategic Framework */}
          <Card className="border-2 border-primary-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary-600" />
              </div>
              <CardTitle className="text-2xl">Valpre Strategic Framework</CardTitle>
              <CardDescription className="text-base">
                Core methodology for strategic planning and execution
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Comprehensive strategic assessment tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Integrated planning and roadmap development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Performance measurement and tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Stakeholder alignment mechanisms</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Extra Secondary Framework */}
          <Card className="border-2 border-primary-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary-600" />
              </div>
              <CardTitle className="text-2xl">Valpre Extra Secondary</CardTitle>
              <CardDescription className="text-base">
                Advanced implementation and optimization framework
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Operational excellence methodologies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Change management and adoption strategies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Continuous improvement frameworks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Risk mitigation and governance</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="container mx-auto px-6 py-16 bg-neutral-50">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Framework in Action</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            See how organizations are leveraging Valpre frameworks to drive measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Screenshot Placeholder 1 */}
          <div className="bg-white rounded-lg border-2 border-dashed border-neutral-300 p-8 flex flex-col items-center justify-center min-h-[400px] hover:border-primary-400 transition-colors">
            <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-neutral-400" />
            </div>
            <p className="text-neutral-500 text-center font-medium">Strategic Framework Dashboard</p>
            <p className="text-neutral-400 text-sm text-center mt-2">Screenshot placeholder - Add your image here</p>
          </div>

          {/* Screenshot Placeholder 2 */}
          <div className="bg-white rounded-lg border-2 border-dashed border-neutral-300 p-8 flex flex-col items-center justify-center min-h-[400px] hover:border-primary-400 transition-colors">
            <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-neutral-400" />
            </div>
            <p className="text-neutral-500 text-center font-medium">Implementation Overview</p>
            <p className="text-neutral-400 text-sm text-center mt-2">Screenshot placeholder - Add your image here</p>
          </div>
        </div>
      </section>

      {/* Enterprise Adoption */}
      <section id="adoption" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Enterprise-Wide Adoption</h2>
            <p className="text-lg text-neutral-600">
              Designed for seamless integration across your entire organization
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Scalable</h3>
              <p className="text-neutral-600">
                From teams to enterprise-wide deployment with consistent methodology
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Proven</h3>
              <p className="text-neutral-600">
                Battle-tested frameworks with measurable outcomes and ROI
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">Flexible</h3>
              <p className="text-neutral-600">
                Adaptable to your organization's unique needs and culture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-center text-white shadow-xl">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl mb-8 text-primary-50">
            Join leading organizations leveraging Valpre frameworks for strategic success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-neutral-100">
              Schedule a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-primary-700">
              Download Framework Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="text-xl font-semibold text-neutral-900">Valpre</span>
            </div>
            <p className="text-neutral-600 text-sm">
              © 2024 Valpre. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
