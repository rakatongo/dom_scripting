module PaginaHelper

	def parrafo(num)
		Faker::Lorem.paragraph(num)
	end
	def parrafos(num)
		Faker::Lorem.paragraphs(num)
	end

	def sentencia(num)
		Faker::Lorem.sentence(num)
	end

	def sentencias(num)
		Faker::Lorem.sentences(num)
	end
end
