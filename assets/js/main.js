// Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    document.getElementById('mobile-menu').classList.add('hidden');
                }
            });
        });

        // Scroll functions
        function scrollToServices() {
            document.getElementById('servicos').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        function scrollToContact() {
            document.getElementById('contato').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }

        // Service modal functions
        const serviceDetails = {
            gestao: {
                title: 'Gestão e Performance',
                content: `
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4 text-lg">Reestruturação Completa</h4>
                            <ul class="list-disc list-inside space-y-2 mb-6 text-gray-600">
                                <li>Reestruturação de processos operacionais e de atendimento</li>
                                <li>Implementação e monitoramento de KPIs (funil de vendas, produtividade e qualidade)</li>
                                <li>Estratégias para aumento de resultados e eficiência operacional</li>
                                <li>Integração entre gestão de pessoas, processos e tecnologia</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4 text-lg">Benefícios Esperados</h4>
                            <ul class="list-disc list-inside space-y-2 text-gray-600">
                                <li>Aumento da produtividade em até 40%</li>
                                <li>Melhoria na satisfação do cliente</li>
                                <li>Redução de custos operacionais</li>
                                <li>Processos mais eficientes e padronizados</li>
                                <li>Equipes mais engajadas e produtivas</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-800">
                        <p class="text-blue-800"><strong>Diferencial DigiTICall:</strong> Combinamos metodologias ágeis com ferramentas de gestão modernas para criar um ambiente de alta performance sustentável.</p>
                    </div>
                `
            },
            modernizacao: {
                title: 'Modernização Digital',
                content: `
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4 text-lg">Soluções Tecnológicas</h4>
                            <ul class="list-disc list-inside space-y-2 mb-6 text-gray-600">
                                <li>Implantação e customização de CRM para diferentes portes de empresas</li>
                                <li>Soluções omnichannel (WhatsApp, chat, e-mail, redes sociais)</li>
                                <li>Telefonia em nuvem integrada ao CRM</li>
                                <li>Automação de fluxos e processos</li>
                                <li>Comunicação interna moderna (Teams, Slack, Google Workspace)</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4 text-lg">Resultados Alcançados</h4>
                            <ul class="list-disc list-inside space-y-2 text-gray-600">
                                <li>Centralização completa da comunicação</li>
                                <li>Redução de tempo de resposta em 60%</li>
                                <li>Automação de tarefas repetitivas</li>
                                <li>Melhoria na experiência do cliente</li>
                                <li>Integração total entre sistemas</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-6 p-4 bg-green-50 rounded-lg border-l-4 border-green-600">
                        <p class="text-green-800"><strong>Diferencial DigiTICall:</strong> Soluções que equilibram robustez enterprise com custo-benefício, adequadas para PMEs e grandes empresas no DF.</p>
                    </div>
                `
            },
            redes: {
                title: 'Redes e Infraestrutura Crítica',
                content: `
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4 text-lg">Tecnologias Avançadas</h4>
                            <ul class="list-disc list-inside space-y-2 mb-6 text-gray-600">
                                <li>Projetos de redes corporativas e críticas</li>
                                <li>Datacom, MPLS, SDH, DWDM, WLAN, SD-WAN</li>
                                <li>Integração de soluções de alto desempenho</li>
                                <li>Suporte a ambientes de missão crítica</li>
                                <li>Soluções híbridas enterprise e open-source</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4 text-lg">Setores Atendidos</h4>
                            <ul class="list-disc list-inside space-y-2 text-gray-600">
                                <li>Energia e utilities</li>
                                <li>Telecomunicações</li>
                                <li>Saúde e hospitais</li>
                                <li>Instituições financeiras</li>
                                <li>Governo e órgãos públicos</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-700">
                        <p class="text-gray-800"><strong>Diferencial DigiTICall:</strong> Expertise em ambientes críticos com foco em resiliência e disponibilidade 99.9%.</p>
                    </div>
                `
            },
            seguranca: {
                title: 'Segurança da Informação',
                content: `
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4 text-lg">Soluções de Segurança</h4>
                            <ul class="list-disc list-inside space-y-2 mb-6 text-gray-600">
                                <li>Implantação e operação de SOC/NOC, SIEM e SOAR</li>
                                <li>Monitoramento de ameaças 24/7</li>
                                <li>Resposta a incidentes e pentests</li>
                                <li>Firewalls, IDS/IPS e ferramentas open-source</li>
                                <li>Gestão de vulnerabilidades</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4 text-lg">Conformidade e Auditoria</h4>
                            <ul class="list-disc list-inside space-y-2 text-gray-600">
                                <li>Conformidade com LGPD</li>
                                <li>Certificação ISO 27001</li>
                                <li>Framework NIST</li>
                                <li>Auditorias de segurança</li>
                                <li>Proteção de dados sensíveis para setores regulados</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-6 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                        <p class="text-red-800"><strong>Diferencial DigiTICall:</strong> Combinamos ferramentas enterprise com soluções open-source para máxima proteção com custo otimizado.</p>
                    </div>
                `
            },
            transformacao: {
                title: 'Transformação com Tecnologia',
                content: `
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4 text-lg">Tecnologias Emergentes</h4>
                            <ul class="list-disc list-inside space-y-2 mb-6 text-gray-600">
                                <li>Adoção de Inteligência Artificial</li>
                                <li>Análise de dados para apoiar decisões</li>
                                <li>Automação de rotinas críticas</li>
                                <li>Projetos personalizados por negócio</li>
                                <li>Integração completa entre sistemas</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4 text-lg">Impacto nos Negócios</h4>
                            <ul class="list-disc list-inside space-y-2 text-gray-600">
                                <li>Ganho de agilidade operacional</li>
                                <li>Redução significativa de custos</li>
                                <li>Decisões baseadas em dados</li>
                                <li>Vantagem competitiva sustentável</li>
                                <li>Alinhamento com metas estratégicas</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-6 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-600">
                        <p class="text-purple-800"><strong>Diferencial DigiTICall:</strong> Projetos que alinham tecnologia às metas estratégicas, garantindo ROI mensurável e sustentável.</p>
                    </div>
                `
            },
            treinamentos: {
                title: 'Treinamentos e Educação Corporativa',
                content: `
                    <div class="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4 text-lg">Modalidades de Treinamento</h4>
                            <ul class="list-disc list-inside space-y-2 mb-6 text-gray-600">
                                <li>Formação prática em segurança e redes</li>
                                <li>Bootcamps técnicos em SOC/NOC</li>
                                <li>Treinamento em soluções open-source</li>
                                <li>Workshops para líderes e equipes</li>
                                <li>Capacitação sob medida por empresa</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-gray-900 mb-4 text-lg">Áreas de Especialização</h4>
                            <ul class="list-disc list-inside space-y-2 text-gray-600">
                                <li>Gestão de desempenho</li>
                                <li>Transformação digital</li>
                                <li>Atendimento digital</li>
                                <li>Cibersegurança avançada</li>
                                <li>Autonomia tecnológica</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-6 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                        <p class="text-orange-800"><strong>Diferencial DigiTICall:</strong> Capacitação prática focada em criar autonomia tecnológica, reduzindo dependência externa.</p>
                    </div>
                `
            }
        };

        function openServiceModal(serviceType) {
            const modal = document.getElementById('service-modal');
            const title = document.getElementById('modal-title');
            const content = document.getElementById('modal-content');
            
            const service = serviceDetails[serviceType];
            if (service) {
                title.textContent = service.title;
                content.innerHTML = service.content;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeServiceModal() {
            const modal = document.getElementById('service-modal');
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        document.getElementById('service-modal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeServiceModal();
            }
        });

        // Contact form submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const form = e.target;
            const originalHTML = form.innerHTML;
            
            form.innerHTML = `
                <div class="text-center py-8">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Solicitação Enviada!</h3>
                    <p class="text-gray-600 mb-4">Obrigado pelo interesse na DigiTICall. Nossos especialistas no DF entrarão em contato em breve para agendar sua consultoria gratuita.</p>
                    <button type="button" onclick="resetForm()" class="bg-gradient-to-r from-blue-800 to-green-600 text-white px-6 py-2 rounded-lg hover:from-blue-900 hover:to-green-700 transition-all">
                        Nova Solicitação
                    </button>
                </div>
            `;
            
            // Store original form HTML for reset
            form.dataset.originalHTML = originalHTML;
        });

        function resetForm() {
            const form = document.getElementById('contact-form');
            form.innerHTML = form.dataset.originalHTML;
            
            // Re-attach event listener
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                const originalHTML = e.target.innerHTML;
                e.target.innerHTML = `
                    <div class="text-center py-8">
                        <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">Solicitação Enviada!</h3>
                        <p class="text-gray-600 mb-4">Obrigado pelo interesse na DigiTICall. Nossos especialistas no DF entrarão em contato em breve.</p>
                        <button type="button" onclick="resetForm()" class="bg-gradient-to-r from-blue-800 to-green-600 text-white px-6 py-2 rounded-lg hover:from-blue-900 hover:to-green-700 transition-all">
                            Nova Solicitação
                        </button>
                    </div>
                `;
                e.target.dataset.originalHTML = originalHTML;
            });
        }

        // WhatsApp function
        function openWhatsApp() {
            const message = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços da DigiTICall no DF e agendar uma consultoria gratuita.");
            const whatsappURL = `https://wa.me/5561999999999?text=${message}`;
            window.open(whatsappURL, '_blank', 'noopener,noreferrer');
        }

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe service cards for animation
        document.querySelectorAll('.service-card, .pillar-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
    

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9843b1f737f16472',t:'MTc1ODczMTcyOC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();